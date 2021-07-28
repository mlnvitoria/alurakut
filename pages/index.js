import React from 'react';
import Box from "./src/components/Box";
import MainGrid from "./src/components/MainGrid";
import { ProfileRelationsBoxWrapper } from "./src/components/ProfileRelations";
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from "./src/lib/AlurakutCommons";

function ProfileSidebar(properties) {
  return (
    <Box as="aside">
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
  
  const [communities, setCommunities] = React.useState(
    [{ 
      id: new Date().toISOString(),
      title: 'Eu odeio acordar cedo',
      imageUrl: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    }]
  );

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

              const formData = new FormData(event.target);
              const newCommunity = {
                id: new Date().toISOString(),
                title: formData.get('title'),
                imageUrl: formData.get('imageUrl'),
              };

              const updatedCommunities = [...communities, newCommunity];
              setCommunities(updatedCommunities);
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
                  name="imageUrl" 
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
              {communities.map((currentItem) => {
                return (
                  <li key={currentItem.id}>
                    <a href={`/communities/${currentItem.title}`}>
                      <img src={currentItem.imageUrl ?? `http://placehold.it/300x300`} />
                      <span>{currentItem.title}</span>
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
