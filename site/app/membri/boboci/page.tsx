"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Boboci.module.css';

const membri = [
    {
        id: 1,
        nume: 'Moisă Andrei-Florentin',
       // descriere: 'Ziua creez jocuri și explorez lumea securității cibernetice, seara mă relaxez cu un antrenament de kickbox și o porție zdravănă de distracție. Îmi place să sparg coduri, nu și reguli (cu excepția celor din jocurile mele). Îmbin logica, adrenalinele și umorul ca într-un quest bine scris – iar final boss-ul e întotdeauna un bug încăpățânat.',
        poza: '/images/MoisaAndrei.jpg',
    },
    {
        id: 2,
        nume: 'Rosu Diana',
      //  descriere: 'Pasionată de informatică, dar nu uit niciodată să iau o pauză pentru o plimbare bună și o discuție cu prietenii. Îmi place să rezolv bug-uri, dar și să creez conexiuni – atât între linii de cod, cât și între oameni. Împart timpul între tastatură și povești în aer liber, pentru că viața e mai frumoasă cu echilibru (și un pic de Wi-Fi).',
        poza: '/images/RosuDiana.jpg',
    },
   
    {
        id: 3,
        nume: 'Rusu Catalin',
       // descriere: 'Ziua, mă antrenez pe teren, fie că dau lovituri pe ring sau alerg după mingea la fotbal, iar noaptea îmi „sparg” codul ca un adevărat hacker. Am încercat multe sporturi, dar pasiunea pentru informatică mă ține mereu în priză. În sport, am învățat să fiu rapid și decisiv, iar în informatică aplic aceleași principii – doar că aici adversarii sunt bug-uri și algoritmi, nu oameni. Îmbin adrenalina din contact cu logica din cod și, la final, întotdeauna mă simt câștigător!',
        poza: '/images/RusuCatalin.jpg',
    },
    {
        id: 4,
        nume: 'Tibuleac Gabriela',
       // descriere: 'Ziua, mă ocup de pisici (care au mai multă personalitate decât un cod buguit) și antrenez porumbei să zboare într-un stil deosebit, iar noaptea mă pierd în lumea web development-ului, construind site-uri ca niște cuiburi digitale. Mă pricep să creez conexiuni – între linii de cod sau între pisici și oameni. Fiecare proiect e o provocare, dar nimic nu se compară cu sentimentul de satisfacție când porumbeii și site-urile mele sunt învățate să zboare perfect!',
        poza: '/images/TipuleacGabriela.jpg',
    },
   
];

export default function BobociPage() {
    const [likes, setLikes] = useState<number[]>([]);
    const [dislikes, setDislikes] = useState<number[]>([]);

    useEffect(() => {
            const storedLikes = localStorage.getItem('bobociLikes');
            const storedDislikes = localStorage.getItem('bobociDislikes');
            if (storedLikes) {
                setLikes(JSON.parse(storedLikes));
            } else {
                setLikes(membri.map(() => 0)); 
            }
            if (storedDislikes) {
                setDislikes(JSON.parse(storedDislikes));
            } else {
                setDislikes(membri.map(() => 0)); 
            }
        }, []);

    useEffect(() => {
          if (likes.length > 0) {
                    localStorage.setItem('bobociLikes', JSON.stringify(likes));
                }
            if (dislikes.length > 0) {
                    localStorage.setItem('bobociDislikes', JSON.stringify(dislikes));
                }
            }, [likes, dislikes]);
        

    const handleLike = (index: number) => {
        const newLikes = [...likes];
        newLikes[index] += 1;
        setLikes(newLikes);
    };

    const handleDislike = (index: number) => {
        const newDislikes = [...dislikes];
        newDislikes[index] += 1;
        setDislikes(newDislikes);
    };

    return (
        <div>
            <h1 className={styles.header}>Boboci</h1>
            <div className={styles.cardContainer}>
                {membri.map((membru, index) => (
                    <div key={membru.id} className={styles.card}>
                        <Link href={`/membri/boboci/${membru.id}`}>
                            <img 
                                src={membru.poza} 
                                alt={membru.nume} 
                                className={styles.image} 
                            />
                        </Link>
                        <h2 className={styles.title}>{membru.nume}</h2>
                        <p className={styles.description}>{membru.descriere}</p>
                        <div className="flex justify-between items-center -mt-80">
                          
                            <div className="flex flex-col items-center">
                                <button onClick={() => handleLike(index)}>
                                    <img 
                                        src="/images/like.png" 
                                        alt="Like" 
                                        className="w-8 h-8 cursor-pointer"
                                    />
                                </button>
                                <span>{likes[index]} Likes</span>
                            </div>
                          
                            <div className="flex flex-col items-center">
                                <button onClick={() => handleDislike(index)}>
                                    <img 
                                        src="/images/dislike.png" 
                                        alt="Dislike" 
                                        className="w-8 h-8 cursor-pointer"
                                    />
                                </button>
                                <span>{dislikes[index]} Dislikes</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}