# Fit Service web application

### My BEng Thesis for first-stage studies.

The assumption of the project is create complete Web application for remote dietary support.

Web application created for dietician and their clients, dietician can remote take care you client and make diets plan for them. Clients can remote buy diets plans, get this from yours dietician and make raports with yours parameters and progress. Clients can use a calculator calories to check how many calories they eat of the day and keep a diary of your meals.

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

First steps which i made was create prototype for my website application. I choose figma to design prototype because it is good, simple and free application to makes application prototypes. The next job was choice my backend, frontend environment and database.

### Bakcend

To backend environment i chose django because Django is a high-level web framework that abstracts many complexities, allowing developers to focus on building features rather than dealing with low-level details, Django has excellent documentation that is thorough and easy to follow. This is crucial for both beginners and experienced developers, making it easier to learn and work with the framework and Security is a top priority in Django. The framework includes built-in protection against common security threats, such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). This helps developers create more secure applications by default.

### Database

To database i chose postgresql because PostgreSQL is designed to scale both vertically and horizontally. It can handle large amounts of data and is suitable for both small-scale applications and enterprise-level systems and PostgreSQL has a strong focus on security, offering features such as SSL certificates, data encryption, and advanced access control mechanisms. Regular security updates and a proactive security team contribute to its reputation as a secure database system.

### Frontend

The last choice was choice frontend framework and i chose react vite becauseVite is known for its fast development server. It leverages native ES modules, and during development, it provides near-instantaneous hot module replacement (HMR). This leads to a more efficient and enjoyable development experience, Vite optimizes the build process by leveraging features like ES Module imports and dynamic imports. This results in faster build times compared to traditional bundlers, making it suitable for projects of varying sizes and Vite has built-in support for TypeScript, making it easy to use TypeScript with your React projects without the need for additional configuration.

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
