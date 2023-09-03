import os
import glob
from feedgen import feed
from datetime import date

# Create a feed generator
fg = feed.FeedGenerator()
fg.title('Your Website RSS Feed')
fg.link(href='https://d-saikrishna.github.io/', rel='alternate')
fg.description('Latest updates from Krishna Dammalapati')

# Loop through your content and add items
articles = glob.glob("**/*.md", recursive=True)
articles.remove('README.md')

for post in articles:
    title = post.split('/')[-1][:-3]
    if 'Anviksiki' in post:
          url = 'https://d-saikrishna.github.io/Blogs/Anviksiki/'+title+'.html'
    fe = fg.add_entry()
    fe.title(title)
    fe.link(href=url)

fg.rss_file('feed.xml') # Write the RSS feed to a file