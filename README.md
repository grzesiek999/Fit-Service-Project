# Fit Service web application

### My BEng Thesis for first-stage studies.

The assumption of the project is create complete Web application for remote dietary support.

Web application created for dietician and their clients, dietician can remote take care of own clients and make diets plan for them. Clients can buy diets plans and make reports with own parameters and progress. Additionally, customers can use a few calculators and check products in data base of application.

<br/>

## Used technology:
<ul>
    <li>React</li>
    <li>TypeScript</li>
    <li>SCSS</li>
    <li>Django</li>
    <li>PostgreSQL</li>
    <li>Prototype in Figma</li>
</ul>

<br/>

## Launch application

### 1. Clone repository:
```
git clone https://github.com/grzesiek999/Fit-Service-Project.git
```
### 2. Go to backend catalog to install virtual environment:

### windows
```
py -m pip install --user virtualenv
```

### unix / mac
```
python3 -m pip install --user virtualenv
```

### 3. Create virtual enviroment:

### windows
```
py -m venv env
```

### unix / mac
```
python3 -m venv env
```

### 4. Install the necessary dependencies:

### windows
```
py -m pip install -r requirements.txt
```

### unix / mac
```
python3 -m pip install -r requirements.txt
```

### 5. Configure settings.py:

Edit settings.py and change the settings.py for the database, then migrate the database
```
python manage.py makemigrations
```
```
python manage.py migrate
```

### 6. Run backend server:

```
python manage.py runserver
```

### 7. Go to frontend/client catalog and Install the needed dependencies:

```
npm install
```

### 8. Run React application:

```
npm run dev
```

<br/>

### Application work on localhost - port 3000
### You can open application at link: http://localhost:3000
