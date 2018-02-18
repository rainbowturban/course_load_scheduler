package org.dselent.course_load_scheduler.client.event_handler;

import org.dselent.course_load_scheduler.client.event.SubmitRemoveSectionEvent;
import com.google.gwt.event.shared.EventHandler;

public interface SubmitRemoveSectionEventHandler extends EventHandler{
	public void onSubmitRemoveSection(SubmitRemoveSectionEvent evt);
}
