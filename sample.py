import json
import requests

# Function to check if a URL returns a 404 error
def is_404(url):
    try:
        response = requests.get(url)
        return response.status_code == 404
    except Exception as e:
        print(f"Error checking URL {url}: {e}")
        return False

# Load the JSON file
with open('carrer.json', 'r') as file:
    data = json.load(file)

# List to store items to be removed
items_to_remove = []

# Check each item's link URL
for item in data['data']:
    link = item.get('Link')
    if link:
        if is_404(link):
            items_to_remove.append(item)

# Remove the items with 404 links
for item in items_to_remove:
    data['data'].remove(item)

# Write the updated data back to the JSON file
with open('carrer_updated.json', 'w') as file:
    json.dump(data, file, indent=4)

print("404 URLs removed successfully.")
