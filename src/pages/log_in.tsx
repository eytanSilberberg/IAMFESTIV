export const Log_In = () => {
  return (
    <section className="log in main-layout">
      <form>
        <label>
          username:
          <input type="text" />
        </label>
        password:
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
