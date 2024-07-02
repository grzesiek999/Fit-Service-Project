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
    <li>Figma</li>
</ul>

<br/>

## Screens
![moj_profil](https://github.com/grzesiek999/Fit-Service-Project/assets/43814123/f90f02d5-2d7d-498a-9b92-249a80bb25f2)
![oferta](https://github.com/grzesiek999/Fit-Service-Project/assets/43814123/185cf343-185b-4cb5-800f-fe78f30b4071)
![dieta](https://github.com/grzesiek999/Fit-Service-Project/assets/43814123/875ec535-4b35-4413-be84-cd4ff40c4afc)
![orders](https://github.com/grzesiek999/Fit-Service-Project/assets/43814123/6c8d5d04-da82-4b36-a855-dc7df4b4938c)
![create_diet](https://github.com/grzesiek999/Fit-Service-Project/assets/43814123/fafbb0ff-4b45-41ba-8115-428a0e30e880)

<br/>

## Launch application

### 1. Clone repository:
```
git clone https://github.com/grzesiek999/Fit-Service-Project.git
```
### 2. Go to backend catalog to install virtual environment:

windows
```
py -m pip install --user virtualenv
```

unix / mac
```
python3 -m pip install --user virtualenv
```

### 3. Create virtual enviroment:

windows
```
py -m venv env
```

unix / mac
```
python3 -m venv env
```

### 4. Install the necessary dependencies:

windows
```
py -m pip install -r requirements.txt
```

unix / mac
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

Run: http://localhost:5173
