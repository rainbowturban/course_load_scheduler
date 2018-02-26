package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendEditSectionAction;
import org.dselent.course_load_scheduler.client.event_handler.SendEditSectionEventHandler;

import com.google.gwt.event.shared.GwtEvent;

public class SendEditSectionEvent extends GwtEvent<SendEditSectionEventHandler>{
public static Type<SendEditSectionEventHandler> TYPE = new Type<SendEditSectionEventHandler>();
	
	private SendEditSectionAction action;
	
	public SendEditSectionEvent(SendEditSectionAction action)
	{
		this.action = action;
	}
	
	public SendEditSectionAction getAction()
	{
		return action;
	}
	
	@Override
	public Type<SendEditSectionEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	@Override
	protected void dispatch(SendEditSectionEventHandler handler)
	{
		handler.onSendEditSection(this);
	}

}
