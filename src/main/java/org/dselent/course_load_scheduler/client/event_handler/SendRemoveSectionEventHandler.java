package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SendRemoveSectionEvent;
import com.google.gwt.event.shared.EventHandler;

public interface SendRemoveSectionEventHandler extends EventHandler{
	public void onSendRemoveSection(SendRemoveSectionEvent evt);
}
