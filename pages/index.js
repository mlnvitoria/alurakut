import Box from "./src/components/Box";
import MainGrid from "./src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "./src/components/ProfileRelations";
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from "./src/lib/AlurakutCommons";

function ProfileSidebar(properties) {
  return (
    <Box>
      <img src={`https://github.com/${properties.githubUser}.png`}  style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${properties.githubUser}`}>
          @{properties.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {

  const githubUser = "vimendes";
  
  const communities = [
    'Alurakut',
  ];
  const people = [
    'juunegreiros',
    'peas',
    'omariosouto',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem-vindo(a)!</h1>

            <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCreateCommunity(event) {
              event.preventDefault();
              console.log('alo');
            }}>
              <div>
                <input 
                  type="text"
                  name="title" 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  aria-label="Qual vai ser o nome da sua comunidade?" 
                />
              </div>
              
              <div>
                <input 
                  type="text"
                  name="image" 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  aria-label="Coloque uma URL para usarmos de capa" 
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="peopleArea" style={{ gridArea: "peopleArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Pessoas ({people.length})</h2>
            <ul>
              {people.map((currentItem, index) => {
                return (
                  <li key={index}>
                    <a href={`/users/${currentItem}`}>
                      <img src={`https://github.com/${currentItem}.png`} />
                      <span>{currentItem}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>
            <ul>
              {communities.map((currentItem, index) => {
                return (
                  <li key={index}>
                    <a href={`/users/${currentItem}`}>
                      <img src={`http://placehold.it/300x300`} />
                      <span>{currentItem}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
    
  )
}
