import classNames from "classnames";

export const pokemonDetailsClassNames = (hasData?: boolean) => ({
  container: classNames(
    "text-white rounded bg-slate-400 p-2 mb-2 overflow-hidden transition-all duration-500 ease-in-out",
    {
      "opacity-100": hasData,
      "max-h-0 opacity-0": !hasData,
    }
  ),
});
