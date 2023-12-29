# CREATE gita.db
sqlite3 gita.db

# Import csv
.mode csv
.separator :
.import Gita.csv gita #Creates table gita

.schema # To check schema
