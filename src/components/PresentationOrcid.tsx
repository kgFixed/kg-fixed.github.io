import "../assets/css/textPresentation.css"

function PresentationORCID() {

  return (
    <>
      <div className="textPresentation">
            <h1>Orcid.org</h1>
            <p className="texte">ORCID (Open Researcher and Contributor ID) is a nonprofit organization and global standard for unique, persistent identifiers (e.g., https://orcid.org/0000-0002-1825-0097) that distinguish researchers across disciplines, institutions, and career stages. It solves the "name ambiguity" problem in academia by linking individuals to their scholarly outputs (papers, datasets, patents).</p>
            <br></br>
            <p className="texte">Each ORCID iD is a lifetime digital CV, controlled by the researcher, that aggregates affiliations, publications, grants, and peer-reviewed activities. Integrated with 10,000+ systems (Crossref, PubMed, Scopus), it streamlines manuscript submissions, grant applications, and institutional reporting.</p>
            <br></br>
            <p>Key features</p>
            <ul>
                <li>Free registration and use for researchers.</li>
                <li>Privacy controls: Users choose what data to share publicly or privately.</li>
                <li>Interoperability: Works with CrossRef, DataCite, funders (NIH, Wellcome), and universities.</li>
                <li>Machine-readable (JSON-LD, RDF) for integration with scholarly infrastructure.</li>
            </ul>
            <br></br>
            <p className="texte">ORCID promotes FAIR data principles, reduces administrative burdens, and is governed by a community board. Over 20 million IDs have been issued (2024), making it essential for open science and academic credit.</p>
        </div>
    </>
  )
}

export default PresentationORCID
