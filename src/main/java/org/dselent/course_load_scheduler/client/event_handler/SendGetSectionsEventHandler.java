package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendGetSectionsEvent;

import com.google.gwt.event.shared.EventHandler;

public interface SendGetSectionsEventHandler extends EventHandler{
	public void onSendGetSections(SendGetSectionsEvent evt);
}
