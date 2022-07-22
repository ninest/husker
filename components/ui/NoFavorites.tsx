import { Icon } from "../Icon";

;

export const NoFavorites = () => (
  <div className="prose border-2 border-dashed dark:border-gray-darkest rounded-md text-gray text-sm p-base">
    <p className="font-bold">
      You haven't added any favorites yet! To add favorites, right click a link
      (or long press on mobile) and click "Add to favorites".
    </p>

    <p>You may also add custom links to favorites:</p>
    <ul>
      <li>
        On mobile, open the menu by pressing the{" "}
        <Icon id="griplines" className="inline border dark:border-gray-darker rounded-sm p-0.5" />{" "}
        button on the top right, then find the{" "}
        <Icon id="cog" className="inline" /> button on the bottom.
      </li>
      <li>
        On desktop, click the <Icon id="cog" className="inline" /> button at the
        bottom of the sidebar.
      </li>
    </ul>
    <p>
      You may also remove this message by disabling favorites in the settings.
    </p>
  </div>
);
