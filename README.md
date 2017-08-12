# websub-execute

Execute a command when a WebSub event is received.

Does not require server set-up unlike other WebSub subscribers. This saves a lot of firewall and security pains.

It works via [websub-to-eventsource project hosted on Heroku](https://github.com/scalawilliam/websub-to-eventsource).

## Usage
```
$ npm install -g websub-execute
$ websub-execute -u https://git.digitalocean.scalawilliam.com/ -- 'echo received an update!'
```

If you want to also execute the command before any event is received, add `-i` argument.

## Use cases

### Git
If your Git repository supports WebSub, you would be able to react to Git updates and deploy automatically.

### GitHub replacement?

I'm using this for [https://git.digitalocean.scalawilliam.com/](https://git.digitalocean.scalawilliam.com/) which is going to be self-hosting instead of being dependent on GitHub.

GitHub's WebHooks are a confusing and difficult mess. Why should you even need to set anything up for public repositories? Why should I even need a web server? Important questions to be asked when you're an [IndieWeb](https://indieweb.org/) person.

## Licence
MIT

## Author
William Narmontas