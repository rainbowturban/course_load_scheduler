package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.IndexPresenter;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PopupPanel;

public interface IndexView extends BaseView<IndexPresenter>
{
	HTMLPanel getMainPanel();
	void setMainPanel(HTMLPanel mainPanel);
	PopupPanel getGlassLoadingPanel();
	Image getLoadingImage();
}
