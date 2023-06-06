const MessagesBox = () => {
  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div class="bg-light mb-4 p-3 shadow-sm small">
          <p class="m-0"><b># Название канала</b></p>
          <span class="text-muted">N сообщений в канале</span>
        </div>
        <div id="messages-box" className="chat-messages overflow-auto px-5">
          <div class="text-break mb-2"><b>Пользователь 1</b>: сообщение пользователя 1!</div>
          <div class="text-break mb-2"><b>Пользователь 1</b>: сообщение пользователя 2!</div>
        </div>
        <div class="mt-auto px-5 py-3">
          <form novalidate="" class="py-1 border rounded-2">
            <div class="input-group has-validation">
              <input name="body" aria-label="Новое сообщение" placeholder="Введите сообщение..." class="border-0 p-0 ps-2 form-control" value="" />
                <button type="submit" disabled="" class="btn btn-group-vertical">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                  </svg>
                  <span class="visually-hidden">Отправить</span>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessagesBox;
