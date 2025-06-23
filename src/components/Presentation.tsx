import "../assets/css/textPresentation.css"

function Presentation() {

  return (
    <>
        <div className="textPresentation">
            <h1>Connecting the Science Knowledge Graph</h1>
            <p className="texte">The Open Science movement is big in Europe and the rest of the world. Its aim is to make all science outputs available for anyone to find and use: not just scientists in the particular domain, but any scientist, but also any teacher, student, journalist, policy-maker, company, … anyone and everyone, including robots or AI systems that are there to help them out. Much work has been going on in the past decade or so, building a consensus on what this means and how to do it. The current focus is on solving a number of technical problems that are limiting the practicality of Open Science: the fact that it is not enough to make science open, it has to actually be findable, understandable, and usable. One focus here is on interoperability: that data can be opened and read by anyone; and that data can be found by anyone by the use of accompanying descriptive metadata that is understandable to everyone. </p>
            <br></br>
            <p className="texte">Semantic web technology is an important instrument to overcome these interoperability challenges of Open Science. Imagine that all science is described, annotated, formulated so that it can all be “knit together” in a "Science Knowledge Graph", just like how web-pages are connected.  Inside the marine domain, this has been happening on various levels ranging from individual datasets, through to individual institute programmes within many EU / EOSC initiatives and projects, all the way up to the UN / Unesco-level work on the Ocean Info Hub.</p>
            <br></br>
            <p className="texte">The promised end result of a science knowledge graph will be to produce the experience of querying a single database, via the web, that contains all the science that is. It is safe to say we are not there yet, but the pathway to this goal is well-established and being worked on from all sorts of directions by many organisations. At VLIZ, we have been working on a set of python services and libraries that together allow a single data scientist to easily build up a local aggregate of what can be found "out there", which they can then use as a basis for data analysis.  We apply this technique already in a number of concrete projects and dashboards under development.</p>
            <br></br>
            <p className="texte">While we named this platform K-GAP (Knowledge Graph Analysis Platform), we have found that it is very useful in detecting actual knowledge gaps, giving the name a double meaning.</p>
        </div>
    </>
  )
}

export default Presentation
