package org.dselent.course_load_scheduler.client.event;

import org.dselent.course_load_scheduler.client.action.SendGetOneFacultySectionInfoAction;
import org.dselent.course_load_scheduler.client.event_handler.SendGetOneFacultySectionInfoEventHandler;
import com.google.gwt.event.shared.GwtEvent;

public class SendGetOneFacultySectionInfoEvent extends GwtEvent<SendGetOneFacultySectionInfoEventHandler> {
	public static Type<SendGetOneFacultySectionInfoEventHandler> TYPE = new Type<SendGetOneFacultySectionInfoEventHandler>();

	private SendGetOneFacultySectionInfoAction action;

	public SendGetOneFacultySectionInfoEvent(SendGetOneFacultySectionInfoAction action)
	{
		this.action = action;
	}

	public SendGetOneFacultySectionInfoAction getAction()
	{
		return action;
	}

	/*
	 * 
	 */
	@Override
	public Type<SendGetOneFacultySectionInfoEventHandler> getAssociatedType()
	{
		return TYPE;
	}

	/*
	 * 
	 */
	@Override
	protected void dispatch(SendGetOneFacultySectionInfoEventHandler handler)
	{
		handler.onSendGetOneFacultySectionInfo(this);
	}

}
