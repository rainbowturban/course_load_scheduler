package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetSectionTypesAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetSectionTypesEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendGetSectionTypesEvent extends GwtEvent<SendGetSectionTypesEventHandler>{
	public static Type<SendGetSectionTypesEventHandler> TYPE = new Type<SendGetSectionTypesEventHandler>();
	
	private SendGetSectionTypesAction action;
	
	public SendGetSectionTypesEvent(SendGetSectionTypesAction action)
	{
		this.action = action;
	}
	
	public SendGetSectionTypesAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<SendGetSectionTypesEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendGetSectionTypesEventHandler handler)
	{
		handler.onSendGetSectionTypes(this);
	}

}
