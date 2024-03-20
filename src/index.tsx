/* @refresh reload */
import { render } from 'solid-js/web'
import { Router } from "@solidjs/router";
import './index.css'
import { routes } from './routes.ts';

const root = document.getElementById('root')

render(
  () => (
    <Router>
      {routes}
    </Router>
  ),
  root!
)
