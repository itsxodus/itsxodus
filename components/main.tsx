export function Title() {
    return (
        <>
        <div className="pt-4 flex items-center justify-center text-2xl font-bold sm:text-4xl">
            Matthew Lamour
            <div className="px-3 py-4 text-base sm:text-xl">
                (a.k.a. XoDus)
            </div>
        </div><div className="pb-6 flex items-center justify-center text-xl sm:text-2xl font-medium">
                Aspiring Full Stack Developer
            </div>
        </>
    );
}

export function WhoAmI() {
    return (
        <>
        <div className="box-border rounded ">
            <div className="pl-4 py-2 flex justify-left">
                <a className="text-xl font-bold" href="#whoami">
                    Who am I?
                </a>
            </div>
            <div className="px-4 py-2 flex justify-left">
                <p className="font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut purus tellus, sodales malesuada imperdiet molestie, elementum et nunc.
                    Integer non eros sed mi dictum finibus.
                    Vestibulum eleifend mauris vitae magna aliquet tristique.
                    Aliquam volutpat orci sapien.
                    Proin gravida, nibh eget pulvinar sollicitudin, magna justo eleifend nisi,
                    auctor tristique nibh ligula a nibh.
                </p>
            </div>
        </div>
        </>
    );
}

export default function Main() {
  return (
    <>
    <Title/>
    <WhoAmI/>
    </>
  );
}
