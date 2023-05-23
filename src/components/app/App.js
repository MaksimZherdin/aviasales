import headerLogo from '../../assets/img/Logo.svg';
import TransferFiltred from '../TransferFiltred/TransferFiltred';
import TicketList from '../TicketList/TicketList';

import classes from './style.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <img className={classes.header__logo} src={headerLogo} alt="Лого" />
      </header>
      <main className={classes.main}>
        <TransferFiltred />
        <TicketList />
      </main>
    </div>
  );
}

export default App;
