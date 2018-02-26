package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetUsersEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetUsersEventHandler extends EventHandler {
	public void onSendGetUsers(SendGetUsersEvent evt);

}
