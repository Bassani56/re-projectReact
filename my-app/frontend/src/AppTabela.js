import './AppTabela.css';
import PivotTableComponent from './pivotTable/PivotTable';
import ErrorBoundary from './ErrorBoundary';
function AppTabela() {
  return (
    <div className="Tabela">

      <ErrorBoundary>
        <PivotTableComponent/>
      </ErrorBoundary>
    </div>
  );
}

export default AppTabela;
