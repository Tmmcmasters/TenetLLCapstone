

export default function YourChatBubble(props: { text: string }) {

    return (
        <div className="self-end rounded-2xl h-fit p-2  max-w-[50%] bg-primary flex flex-wrap text-left text-xs md:text-base lg:text-base pl-3 mr-1 mt-1">
            {props.text}

        </div>
    )
}