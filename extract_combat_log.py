#!/usr/bin/env python3
"""
Baldur's Gate 3 Combat Log Extractor
Author: Jules

This script is designed to run locally on your machine. It utilizes `yt-dlp` to securely
download the combat log video, then leverages OpenCV to perform a frame-by-frame
analysis and save high-fidelity crops of the combat log region (bottom-right corner).
"""

import os
import sys
import subprocess

def check_dependencies():
    print("[*] Checking local dependencies...")
    try:
        import cv2
        print("[+] OpenCV is installed.")
    except ImportError:
        print("[-] OpenCV is not installed. Installing opencv-python-headless...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "opencv-python-headless"])

    try:
        import yt_dlp
        print("[+] yt-dlp is installed.")
    except ImportError:
        print("[-] yt-dlp is not installed. Installing yt-dlp...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "yt-dlp"])

def download_video(video_url, output_filename="video.mp4"):
    print(f"[*] Downloading video from {video_url}...")

    # We use a standard robust yt-dlp command.
    # Cookies-from-browser can be utilized if you are logged in to confirm you are not a bot.
    command = [
        "yt-dlp",
        "-f", "mp4",
        video_url,
        "-o", output_filename
    ]

    print(f"[*] Running command: {' '.join(command)}")

    try:
        subprocess.run(command, check=True)
        print(f"[+] Download complete: {output_filename}")
        return True
    except subprocess.CalledProcessError as e:
        print(f"[-] yt-dlp download failed with exit code {e.returncode}")
        print("[*] Attempting fallback download with browser cookies to bypass bot checks...")
        fallback_command = [
            "yt-dlp",
            "--cookies-from-browser", "chrome",
            "-f", "mp4",
            video_url,
            "-o", output_filename
        ]
        try:
            subprocess.run(fallback_command, check=True)
            print(f"[+] Fallback download complete: {output_filename}")
            return True
        except subprocess.CalledProcessError:
            print("[-] Standard and cookies-based downloads failed. Please ensure you have network access and cookies are available.")
            return False

def extract_and_crop_frames(video_path, output_dir="extracted_frames", frame_interval_seconds=1.0):
    import cv2

    if not os.path.exists(video_path):
        print(f"[-] Video file {video_path} not found.")
        return

    os.makedirs(output_dir, exist_ok=True)
    print(f"[*] Opening video file: {video_path}")
    cap = cv2.VideoCapture(video_path)

    if not cap.isOpened():
        print("[-] Failed to open video file.")
        return

    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration_sec = total_frames / fps
    print(f"[+] Video Loaded: {fps:.2f} FPS, {total_frames} total frames, {duration_sec:.2f} seconds duration.")

    frame_interval = max(1, int(fps * frame_interval_seconds))
    frame_idx = 0
    saved_count = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        if frame_idx % frame_interval == 0:
            h, w, _ = frame.shape

            # Baldur's Gate 3 combat log occupies the bottom-right corner of the screen.
            # We crop the bottom-right 35% height and 38% width of the frame to capture the log cleanly.
            crop_y_start = int(h * 0.60)
            crop_x_start = int(w * 0.62)
            cropped = frame[crop_y_start:h, crop_x_start:w]

            timestamp_sec = frame_idx / fps
            out_path = os.path.join(output_dir, f"frame_{timestamp_sec:05.1f}s.jpg")
            cv2.imwrite(out_path, cropped)
            saved_count += 1

        frame_idx += 1

    cap.release()
    print(f"[+] Frame extraction and cropping complete! Saved {saved_count} cropped frames to '{output_dir}'.")

def main():
    video_url = "https://youtu.be/VJ6gIUM3RYI?si=qECDR8AcxXaDyAas"
    check_dependencies()

    video_file = "video.mp4"
    if not os.path.exists(video_file):
        success = download_video(video_url, video_file)
        if not success:
            sys.exit(1)

    extract_and_crop_frames(video_file)

if __name__ == "__main__":
    main()
