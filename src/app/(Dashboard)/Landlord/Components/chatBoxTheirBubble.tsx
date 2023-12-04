

export default function TheirChatBubble(props: { text: string }) {

    return (
        <div className="self-start rounded-2xl h-fit p-2  max-w-[50%] bg-secondary flex flex-wrap text-left text-xs md:text-base lg:text-base pl-3 ml-1 mt-1">
            {props.text}
        </div>
    )
}