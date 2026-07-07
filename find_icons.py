import re
import requests
import hashlib

def get_wiki_icon(wiki_url):
    try:
        response = requests.get(wiki_url, timeout=10)
        if response.status_code != 200:
            return None

        # Look for the main icon in the infobox
        # Usually it's in a line like [[File:Filename.png|...]] or similar in raw,
        # but we are looking at HTML.
        # In HTML it's often <a href="/wiki/File:Filename.png" ...>
        match = re.search(r'href="/wiki/File:([^"]+\.(?:png|webp))"', response.text)
        if match:
            filename = match.group(1).replace(' ', '_')
            # The wiki often uses .png for the actual file even if it shows .webp thumbnails
            if filename.endswith('.webp'):
                 # Try to see if there is a png version
                 filename = filename.replace('.webp', '')

            return filename
        return None
    except Exception as e:
        print(f"Error fetching {wiki_url}: {e}")
        return None

def get_url_from_filename(filename):
    if not filename:
        return None
    # Fix for common naming issues
    filename = filename.replace('%27', "'")

    m = hashlib.md5(filename.encode('utf-8')).hexdigest()
    url = f"https://bg3.wiki/w/images/{m[0]}/{m[:2]}/{filename}"
    return url

items_to_check = [
    ("Bow of the Banshee", "https://bg3.wiki/wiki/Bow_of_the_Banshee"),
    ("Legacy of the Masters", "https://bg3.wiki/wiki/Legacy_of_the_Masters"),
    ("Ring of Mental Inhibition", "https://bg3.wiki/wiki/Ring_of_Mental_Inhibition"),
    ("Phalar Aluve", "https://bg3.wiki/wiki/Phalar_Aluve"),
    ("Broodmother's Revenge", "https://bg3.wiki/wiki/Broodmother%27s_Revenge"),
    ("The Dancing Breeze", "https://bg3.wiki/wiki/The_Dancing_Breeze"),
    ("Risky Ring", "https://bg3.wiki/wiki/Risky_Ring"),
    ("Resonance Stone", "https://bg3.wiki/wiki/Resonance_Stone"),
    ("Band of the Mystic Scoundrel", "https://bg3.wiki/wiki/Band_of_the_Mystic_Scoundrel"),
    ("Melf's First Staff", "https://bg3.wiki/wiki/Melf%27s_First_Staff"),
    ("Sorrow", "https://bg3.wiki/wiki/Sorrow"),
    ("Hellrider's Pride", "https://bg3.wiki/wiki/Hellrider%27s_Pride"),
    ("The Whispering Promise", "https://bg3.wiki/wiki/The_Whispering_Promise"),
    ("Luminous Gloves", "https://bg3.wiki/wiki/Luminous_Gloves"),
    ("Callous Glow Ring", "https://bg3.wiki/wiki/Callous_Glow_Ring"),
    ("Coruscation Ring", "https://bg3.wiki/wiki/Coruscation_Ring"),
    ("Amulet of the Devout", "https://bg3.wiki/wiki/Amulet_of_the_Devout"),
    ("Wood Elf Portrait", "https://bg3.wiki/wiki/Wood_Elf")
]

for name, wiki_url in items_to_check:
    filename = get_wiki_icon(wiki_url)
    url = get_url_from_filename(filename)
    if url:
        code = requests.head(url).status_code
        print(f"{name}: {url} ({code})")
        if code != 200 and filename:
            # Try with .png if it was something else
            if not filename.endswith('.png'):
                filename_png = re.sub(r'\.[^.]+ $', '.png', filename)
                url_png = get_url_from_filename(filename_png)
                code_png = requests.head(url_png).status_code
                print(f"  Fallback .png: {url_png} ({code_png})")
    else:
        print(f"{name}: Failed to find icon")
