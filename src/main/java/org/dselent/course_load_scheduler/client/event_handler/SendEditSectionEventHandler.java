package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendEditSectionEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendEditSectionEventHandler extends EventHandler{
	public void onSendEditSection(SendEditSectionEvent evt);
}
