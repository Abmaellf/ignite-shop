"use client";

import { styled } from "./styles";

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 8,
  border: 0,
  color: '#fff',
  padding: '0.2rem 1.5rem',
  margin: '0.5rem',
  span: {
    fontWeight: 'bold',
  },
  fontSize: '1rem',
  width: '20%',
  height: 40,
  fontWeight: 'normal',
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(0.9)',
    }
})

export default function Home() {
  return (
    <Button> 
      <span>test</span> Enviar 
    </Button>
  );
}