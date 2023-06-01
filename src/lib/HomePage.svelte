<script>
  import "../../dist/loginapp";
  import NameInput from "./NameInput.svelte";
  import { folders } from "./store";
  const nameInputComponent = document;

  console.log("dnknvnlnvls");
  console.log(nameInputComponent);

  let names = [];

  function handleNameAdded(event) {
    const { name, type, selectedFolder } = event.detail;

    if (type === "folder") {
      const folderExists = names.find((item) => item.name === name && item.type === "folder");

      if (!folderExists) {
        names = [...names, { name, type, children: [] }];
        folders.update((folders) => [...folders, { name }]);
      } else {
        alert(`Folder '${folderExists.name}' alreader exist `);
      }
    } else {
      const fileName = name;
      const folderExists = names.find((item) => item.name === selectedFolder && item.type === "folder");

      if (folderExists) {
        const isFileNameInChildArray =
          folderExists.children && folderExists.children.some((child) => child.name === fileName);

        if (!isFileNameInChildArray) {
          folderExists.children = folderExists.children || [];
          folderExists.children = [...folderExists.children, { name: fileName, type }];
          names = [...names];
        } else {
          alert(`The file '${fileName}' already exists in the '${folderExists.name}' Folder`);
        }
      } else {
        names = [...names, { name: fileName, type }];
      }
    }
  }
</script>

<main>
  <NameInput on:nameAdded={handleNameAdded} />
  <ul>
    {#each names as { name, type, children }, i}
      {#if type === "folder"}
        <li>
          <span>{name} ({type})</span>
          {#if children}
            <ul>
              {#each children as child}
                <li>{child.name} ({child.type})</li>
              {/each}
            </ul>
          {/if}
        </li>
      {:else}
        <li>{name} ({type})</li>
      {/if}
    {/each}
  </ul>
</main>
