interface HeaderProps {
    title: string[];
  }
export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
      
        <div>
            {title.map((title:string,index:number)=>{
                <p key={index}>{title}</p>
            })}
        </div>
    );
  }
  import React from 'react';

  interface HeaderProps {
    titles: string[];
  }
  
  export const Header: React.FC<HeaderProps> = ({ titles }) => {
    return (
      <div>
        {titles.map((title, index) => (
          <p key={index}>{title}</p>
        ))}
      </div>
    );
  };
  