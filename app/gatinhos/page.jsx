'use client';

import gatinhos from "@/data/gatinhos";
import { useState, useEffect } from "react";

import React from 'react'

function page() {
    const [apiData, setApiData] = useState('');

    useEffect(() => {
        const gatinhosFetch = async () => {
            try{
                const dados = await gatinhos();
                setApiData(dados)
                console.log(dados);
            }catch(error){
                throw error
            }
        };

        gatinhosFetch();
    }, [])

  return (
    <div>
        <p>Foi</p>
        {
            apiData ? (
                apiData.map((gatinho) =>(
                    <div key={gatinho.id}>
                        <p>{gatinho.id}</p>
                        <img src={gatinho.url} alt={gatinho.id} width={256} height={256}></img>
                        </div>
                ))
            ) : (
                <p>Carregando dados da API...</p>
            )
        }
    </div>
  )
}

export default page;