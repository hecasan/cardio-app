export function ListaPacientes({ pacientes }) {
   return (
     <ul>
       {pacientes.map((p, i) => (
         <li key={i}>
           <div className="paciente-item">
             <span className="nome">{p.nome}</span>
             <span className="idade">{p.idade} anos</span>
             <span className="pressao">
               {p.pressaoSistolica && p.pressaoDiastolica 
                 ? `${p.pressaoSistolica}x${p.pressaoDiastolica} mmHg`
                 : p.pressao 
                   ? `${p.pressao} mmHg` 
                   : 'PA não informada'
               }
             </span>
             {p.nivelRisco && (
               <span className={`risco risco-${p.nivelRisco.toLowerCase()}`}>
                 {p.nivelRisco}
               </span>
             )}
           </div>
         </li>
       ))}
     </ul>
   );
 }
 