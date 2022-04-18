import ProfilePostListImg from "../reusable_components/profilepostlist_img-component";


const Paragraph = (props) => {
    return (
        <div>
            <p class="paragraph">
                {props.children}
            </p>
        </div>
    )
}

export default Paragraph;