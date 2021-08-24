# Deploying with Heroku 

## SWBAT
- [ ] explain what a deployed web server is
- [ ] Utilize Heroku as a platform 
- [ ] Create a rails api with a postgres database 
- [ ] deploy rails application to heroku 

## Deploying options
- [Heroku](https://devcenter.heroku.com/articles/getting-started-with-rails6)
- [Amazon Web Services](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ruby-rails-tutorial.html)


## What is Heroku
Heroku is a cloud Platform as a Service (PaaS) that handels hosting applications.
Cloud services like Heroku remove the maintenance and cost of maintaining servers. 
We can use Heroku to host a rails api as a web server accessible using Heroku’s domain. 

You can deploy up to 5 apps for free using Heroku.

[Sign up](https://signup.heroku.com/devcenter)
[Heroku Docs](https://devcenter.heroku.com/categories/heroku-architecture)


## Deploying with Heroku Backend 

Heroku only supports specific versions of ruby, we recommend using 2.7.3. It’s a good idea to install the latest version of bundler and rails as well.
```
rvm install 2.7.3
rvm --default use 2.7.3
gem install bundler
gem install rails

```

For Mac download heroku with the following 
```
brew tap heroku/brew && brew install heroku

```
After download login using `heroku login`
## Build out an app
Create an api using postgres and add additional platforms to your Gemfile.lock, these are needed for heroku to deploy your app.

[Converting a sqlite3 to postgresql](https://medium.com/@virtual_khan/converting-rails-from-sqlite3-to-postgresql-d97023314a14)

```
rails new flatazon --api --minimal --database=postgresql

cd flatazon

bundle lock --add-platform x86_64-linux --add-platform ruby

```

After building out migrations, seeds, models and controllers we can get our application hosted. 

```
git add .
git commit -m 'Initial commit'
git config --list --local | grep heroku
git checkout -b main
git push heroku main
git push heroku main
heroku run rails db:migrate db:seed
heroku open

#visit /items to see the json
```
## Deploying with Heroku Frontend 

```
npx create-react-app flatazon_frontend
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "created react app"
git push heroku master
heroku open
```