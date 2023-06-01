<script>
  import { createEventDispatcher } from "svelte";
  import { folders } from "./store";

  let name = "";
  let type = "folder";
  let selectedFolder = "";

  let folderOptions = [];
  let newName;
  $: folders.subscribe((value) => {
    folderOptions = value;
  });
  const dispatch = createEventDispatcher();

  function addName() {
    newName = {
      name,
      type,
      selectedFolder,
    };
    dispatch("nameAdded", newName);
  }

  function onCancel() {
    name = "";
    type = "folder";
  }
</script>

<div class="form-container">
  <input type="text" bind:value={name} placeholder="Enter name" required />

  <select bind:value={type}>
    <option value="folder">Folder</option>
    <option value="file">File</option>
  </select>

  {#if type === "file"}
    <select bind:value={selectedFolder}>
      <option value="">Select folder</option>
      {#each folderOptions as folder}
        <option value={folder.name}>{folder.name}</option>
      {/each}
    </select>
  {/if}

  <div class="button-container">
    <button on:click={addName}>Save</button>
    <button on:click={onCancel}>Cancel</button>
  </div>
</div>

<style>
  .form-container {
    display: flex;
    align-items: center;
  }

  .form-container input,
  .form-container select {
    margin-right: 10px;
  }

  .button-container {
    margin-left: 10px;
  }
</style>
