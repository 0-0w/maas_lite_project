import { Button,ButtonSet } from "@carbon/react"

function Footer() {
    return(
        <>
        <Button kind="ghost" style={{border: "1px solid black"}}>Skip</Button>
        <Button kind="secondary">Back</Button>
        <Button kind="primary">Get started</Button>
        </>
    )
}


export default Footer;