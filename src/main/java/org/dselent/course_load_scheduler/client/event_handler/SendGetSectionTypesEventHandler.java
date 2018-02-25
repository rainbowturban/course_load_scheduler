package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetSectionTypesEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetSectionTypesEventHandler extends EventHandler{
	public void onSendGetSectionTypes(SendGetSectionTypesEvent evt);

}
