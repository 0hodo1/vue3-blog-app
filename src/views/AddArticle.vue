<template>
  <div class="add-article">
    <form>
      <label>Title:</label>
      <input type="text" id="title" name="title" required />
      <label>Description:</label>
      <textarea id="description" name="description" required />
      <button>Add Article</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.add-article form {
  max-width: 400px;
  margin: 0 auto;
}
.add-article input,
.add-article textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
}
.add-article label {
  display: block;
  margin-top: 24px;
}
text-area {
  height: 120px;
}
.add-article button {
  display: block;
  margin: 20px auto;
  padding: 10px;
  border: none;
  background: #eb4d4b;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
.add-article button:hover {
  background: #d15656;
}
</style>
