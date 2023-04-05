import { login } from "../api/user.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const loginTemplate = (onLogin) => html`
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onLogin} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </section>`;

export function showLogin(ctx){
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin(data){
        const dataValues = [...Object.values(data)].map(d => d.trim());

        const result = {
            email:  dataValues[0],
            password: dataValues[1]
        };

        if(result.email == '' || result.password == ''){
            return alert('All fields are required!');
        };

        await login(result.email, result.password);

        ctx.updateNav();
        ctx.page.redirect('/');
    };
};