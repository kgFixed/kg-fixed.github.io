import "../assets/css/textPresentation.css"

import RdfCodeBlock from "./rdfFile"

function PresentationROR() {

  return (
    <>
      <div className="textPresentation">
            <h1>ROR.org</h1>
            <p className="texte">ROR.org is the official website for the Research Organization Registry, a global, community-led registry of unique identifiers for research institutions. Each ROR ID is a persistent URL (e.g., https://ror.org/03yrm5c26) that resolves to metadata about an organization, including its name, aliases, location, and relationships.</p>
            <br></br>
            <p className="texte">Developed to address the limitations of proprietary systems like GRID, ROR provides open, non-commercial identifiers for disambiguating affiliations in academic publications, grants, and datasets. The registry covers universities, labs, corporations, and nonprofits, with over 100,000 entries (as of 2023).</p>
            <br></br>
            <p className="texte">ROR IDs are machine-readable (JSON-LD, RDF) and integrate with scholarly infrastructure (Crossref, DataCite, ORCID). The system is maintained collaboratively, with data sourced from public records and user contributions.</p>
            <br></br>
            <p className="texte">Unlike proprietary alternatives, ROR is free to use, with an open API and downloadable dataset (CC0 license). It supports reproducibility by standardizing how institutions are cited across platforms.</p>
            <br></br>
            <h2>My Project</h2>
            <p>Everything I've done about it can be found on github, at the following link: <a href="https://github.com/kgFixed/fix_ror.org/tree/main">Ror.org fixed</a></p>
        
            <p>Here is an example of a turtle file for an organisation.</p>
            <RdfCodeBlock 
                githubUrl="https://github.com/kgFixed/fix_ror.org/blob/main/rdf/organisations/000025p04.ttl"
                fileName="organisation.ttl"
                format="Turtle RDF"
            />
        </div>
    </>
  )
}

export default PresentationROR
