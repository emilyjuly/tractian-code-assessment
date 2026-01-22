export function MegaMenu() {
  return (
    <div className="absolute top-full w-screen max-w-5xl rounded-lg bg-white p-8 text-slate-700">
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="mb-4 font-semibold">Monitoramento de Condição</h3>
          <MenuItem title="Sensor e Análise de Vibração" />
          <MenuItem title="Detecção de Falhas com IA" />
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Software de Gestão</h3>
          <MenuItem title="Checklists & POPs" />
          <MenuItem title="Ordens de Serviço" />
        </div>

        <div>
          <h3 className="mb-4 font-semibold">Monitoramento de Produção</h3>
          <MenuItem title="Produção com IA" />
          <MenuItem title="Dashboards" />
        </div>
      </div>
    </div>
  );
}

function MenuItem({ title }: { title: string }) {
  return <a className="block rounded p-2 text-sm hover:bg-gray-100">{title}</a>;
}
