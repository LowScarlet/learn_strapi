# build_files.sh
pip install -r requirements.txt
python3.9 manage.py collectstatic --noinput
python3.9 manage.py makemigrations --noinput
python3.9 manage.py migrate --noinput
