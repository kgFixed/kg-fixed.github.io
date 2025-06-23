import NavBar from "../components/NavBar"
import PresentationORCID from "../components/PresentationOrcid"

function Orcid() {

  return (
    <>
      <div className="ror-page">
        <NavBar />
        <div className="content-container">
            <PresentationORCID />
        </div>
      </div>
    </>
  )
}

export default Orcid
