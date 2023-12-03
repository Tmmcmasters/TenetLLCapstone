import { Button } from "@nextui-org/react";
import TicketChatBox from "../Components/viewTicketChatBox";


export default function ViewTicket() {

    return (
        <div className="flex lg:flex-row flex-col  items-center justify-start lg:justify-start  h-[93vh] mt-5 lg:mt-0">
            <TicketChatBox />
            <div className="flex flex-col justify-Start lg:items-start items-center w-full h-full pl-3 pr-3 lg:pl-10 lg:pr-10 lg:overflow-auto">
                <div className="flex flex-row justify-between items-center w-full ">
                    <h1 className="text-xl lg:text-3xl font-semibold self-center">Ticket Summary</h1>
                    <h1 className="text-xl lg:text-3xl font-semibold text-secondary italic self-center">Urgency</h1>
                </div>
                    <div className="flex flex-row justify-between items-center lg:w-[65%] mt-5 font-light">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero dolorem ducimus aut delectus quo aliquam voluptatum doloremque ipsum sed? Animi beatae quis blanditiis nostrum eligendi illo necessitatibus pariatur aliquam.
                            Nulla quos eaque tempore natus iure excepturi, quidem adipisci consequatur? Odit debitis sequi aliquid doloremque ipsum quibusdam sunt, ut dignissimos commodi laborum, obcaecati voluptatibus maxime, suscipit quasi non. Ut, vel.
                            Non nisi quis reiciendis facilis? Corporis voluptate adipisci nemo id incidunt alias quam error! Nam, praesentium natus aliquam eligendi inventore ullam omnis vel perferendis. Esse odio ullam deserunt dolores adipisci.
                            Eveniet repudiandae qui, at accusamus dicta esse sint nihil maiores ducimus doloremque porro labore nesciunt iste quia cum architecto dignissimos dolorum. Nesciunt, officia sit expedita mollitia nulla cumque? Minima, dolorem?
                            Eos blanditiis quidem voluptatem hic obcaecati adipisci eum illum impedit laudantium alias vel odit et, explicabo vitae quod quae repudiandae corporis inventore tempora commodi doloremque veritatis ratione libero? Officia, deleniti.
                            Veritatis voluptates dignissimos impedit. Dignissimos laudantium, neque omnis fuga sunt quisquam provident laboriosam. Asperiores, qui! Repellat, fugiat blanditiis ut minus facilis assumenda architecto unde iste officia explicabo, perspiciatis, consequuntur doloribus!
                            Corrupti quisquam voluptates dolor iure minima, sequi, sed quibusdam voluptas quos illo sint sit quam et id quis, reiciendis ex nisi enim esse. Esse quod inventore fuga itaque, aperiam et!
                            Obcaecati facilis libero quasi, ipsa id excepturi possimus sit atque voluptates illo. Id aut provident quae vel impedit. Nam perspiciatis laboriosam omnis doloremque, reprehenderit fugiat! Adipisci incidunt quaerat reprehenderit accusamus.
                            Enim ipsam, unde autem dignissimos dicta repellat id perferendis nam facere omnis adipisci aspernatur iste sequi dolores harum cumque asperiores consectetur! Ut incidunt minima corrupti officia velit facilis repellat vitae.
                            Eaque veritatis numquam voluptatibus in similique cum modi rerum enim quidem! Eius saepe fuga repellat! Vitae repellendus in ipsam cupiditate accusamus, aspernatur porro similique tempore ab aliquam sit labore exercitationem?
                            Recusandae quam tempora ipsa minima reprehenderit cupiditate delectus amet ratione, in officia commodi debitis consequatur sit aut possimus labore at rerum veniam libero ad! Accusantium at ad consequuntur pariatur sequi.
                            Eligendi qui dignissimos nesciunt optio hic blanditiis velit tempore voluptate neque numquam eius corporis cupiditate, aliquid obcaecati eveniet perferendis possimus deleniti amet incidunt dolorum accusantium molestias facilis? Rem, maiores alias!
                            Eius eos perspiciatis ea? Assumenda, nemo qui dolore maiores dicta, aut dolorum consectetur molestias aliquid laboriosam impedit doloribus maxime eaque non iure! Perspiciatis at nulla quibusdam iure dicta eum aperiam.
                            Dignissimos, quia sit. Repellat dolor dolorem aliquam ipsum amet tenetur saepe consectetur incidunt rem, quod ratione quis ullam dignissimos omnis commodi error excepturi nesciunt enim eaque labore aliquid? Tenetur, voluptatum.
                            Omnis quibusdam accusamus tempora praesentium ab fugit libero blanditiis pariatur doloribus id tenetur unde, sint veniam distinctio, rerum cupiditate provident sed? In corrupti, repudiandae explicabo cupiditate at deserunt veniam repellendus.
                            Deleniti, consectetur corporis placeat sed aut quod pariatur tempore ut fugit culpa? Inventore cum assumenda laborum ipsum fugiat ducimus quasi reprehenderit ad! Minima tenetur quod praesentium veritatis, consequatur perspiciatis odit.
                            Autem vitae itaque, vero accusamus, animi dolore asperiores fugit ea illum obcaecati unde facilis? Veniam maiores nostrum rerum explicabo delectus totam soluta. Dignissimos id quibusdam eveniet incidunt tempore delectus atque.
                            Rerum voluptatem magnam consectetur quidem possimus eaque odio at asperiores debitis nisi pariatur iusto eveniet quas id, explicabo quam excepturi perferendis optio sed fugit exercitationem ad animi soluta. Saepe, magni!
                            Doloremque architecto error vitae adipisci eum, magni autem? Quas repudiandae, obcaecati laborum earum velit repellendus voluptate similique itaque voluptatibus expedita, autem maxime. Ea, fugiat veritatis exercitationem optio sapiente pariatur neque!
                            Explicabo consequuntur temporibus provident nostrum ducimus. Deserunt natus ratione perspiciatis reiciendis veritatis dicta alias tempore perferendis, distinctio odio dolorum, velit nam officiis, explicabo maxime quas. Natus odio earum architecto repudiandae.</p>
                    </div>
                    <div className="self-end flex flex-col justify-end items-bottom  h-full mb-5">
                        <Button color="warning" className="text-medium font-medium " size="lg" variant="bordered">Close Ticket</Button>
                    </div>
            </div>
        </div>
    )
}