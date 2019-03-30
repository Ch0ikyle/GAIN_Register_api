import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async ctx =>{

    ctx.body = `<h1>Root Page</h1>
                <br>
                <p>TodoList - Root page</p>`;
});

router.get('/login', async ctx =>{
    ctx.body = `<h1>Login Page</h1>
                <br>
                <p>TodoList - Login Page`;
});

router.get('/about', async ctx => {
    ctx.body = `<h1>About page</h1>
                <br>
                <p>Todolist - About page</p>`;
});  

router.get('/todolist', async ctx => {  
    ctx.body = `<h1>Todolist page</h1>
                <br>
                <p>Todolist - Todolist page</p>`;
});
    
router.get('/register', async ctx => {
    ctx.body = `<h1>Register page</h1>
                <br> 
                <p>Todolist - Register page</p>`;
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.on('error', error =>{
    console.error(error);
});

console.log('서버 동작 중');
app.listen(7777);