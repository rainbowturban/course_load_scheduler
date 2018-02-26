package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.ReceiveGetUsersEvent;

import com.google.gwt.event.shared.EventHandler;

public interface ReceiveGetUsersEventHandler extends EventHandler{
	public void onReceiveGetUsers(ReceiveGetUsersEvent evt);
}
