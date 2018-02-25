package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendNewSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.SendNewSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendNewSectionEvent extends GwtEvent<SendNewSectionEventHandler>{
	public static Type<SendNewSectionEventHandler> TYPE = new Type<SendNewSectionEventHandler>();

	private SendNewSectionAction action;

	public SendNewSectionEvent(SendNewSectionAction action)
	{
		this.action = action;
	}

	public SendNewSectionAction getAction()
	{
		return action;
	}

	 @Override
	 public Type<SendNewSectionEventHandler> getAssociatedType()
	 {
		 return TYPE;
	 }

	 
	 @Override
	 protected void dispatch(SendNewSectionEventHandler handler)
	 {
		 handler.onSendNewSection(this);
	 }
}
