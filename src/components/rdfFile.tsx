import React, { useState, useEffect } from 'react';

interface RdfCodeBlockProps {
  githubUrl: string;
  fileName: string;
  format: string;
}

const RdfCodeBlock: React.FC<RdfCodeBlockProps> = ({
  githubUrl,
  fileName,
//   format
}) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Méthode ultra-fiable pour obtenir l'URL raw
        const repoPath = new URL(githubUrl).pathname;
        const rawUrl = `https://raw.githubusercontent.com${repoPath.replace('/blob/', '/')}`;
        
        // Ajout d'un timestamp pour éviter le cache
        const response = await fetch(`${rawUrl}?t=${Date.now()}`);
        
        if (!response.ok) {
          throw new Error(`Impossible de charger le fichier (HTTP ${response.status})`);
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(`Erreur de chargement: ${err instanceof Error ? err.message : 'Erreur inconnue'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [githubUrl]);

  if (loading) {
    return (
      <div style={{ 
        padding: '1rem', 
        textAlign: 'center',
        fontStyle: 'italic' 
      }}>
        Chargement en cours...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ 
        padding: '1rem',
        backgroundColor: '#ffeeee',
        border: '1px solid #ffcccc',
        borderRadius: '4px',
        margin: '1rem 0'
      }}>
        <p style={{ color: '#cc0000', margin: '0 0 0.5rem 0' }}>
          {error}
        </p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0066cc' }}
        >
          Accéder directement au fichier sur GitHub
        </a>
      </div>
    );
  }

  return (
    <div style={{
      border: '1px solid #e1e4e8',
      borderRadius: '6px',
      overflow: 'hidden',
      margin: '1rem 0'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1rem',
        backgroundColor: '',
        borderBottom: '1px solid #e1e4e8'
      }}>
        <span style={{ fontWeight: '600' }}>
          {fileName}
        </span>
        <div>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: '1rem',
              color: '#0366d6',
              textDecoration: 'none'
            }}
          >
            Voir sur GitHub
          </a>
          <a
            href={`data:text/turtle;charset=utf-8,${encodeURIComponent(content)}`}
            download={fileName}
            style={{
              color: '#0366d6',
              textDecoration: 'none'
            }}
          >
            Télécharger
          </a>
        </div>
      </div>
      
      <pre style={{
        margin: 0,
        padding: '1rem',
        overflowX: 'auto',
        backgroundColor: 'black',
        color: "white",
        fontFamily: 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: '0.875rem',
        lineHeight: '1.5'
      }}>
        {content}
      </pre>
    </div>
  );
};

// Exemple d'utilisation avec votre URL
// const ExampleUsage = () => (
//   <RdfCodeBlock
//     githubUrl="https://github.com/kgFixed/fix_ror.org/blob/main/rdf/organisations/000025p04.ttl"
//     fileName="000025p04.ttl"
//     format="Turtle RDF"
//   />
// );

export default RdfCodeBlock;